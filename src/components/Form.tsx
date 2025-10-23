import React, { useState } from "react";

type FieldType = { required: boolean, message: string } | { min: number, message: string };

type InitialValuesType = {
  username: string, password: string, remember: boolean
};

type RulesType = Record<string, FieldType[]>;

interface FormProps {
  initialValues?: InitialValuesType;
  rules?: RulesType;
  onFinish?: (values: InitialValuesType) => void;
  onFinishFailed?: (errors: Record<string, string>) => void;
  children: (props: {
    values: InitialValuesType;
    errors: Record<string, string>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  }) => React.ReactNode;
}

const Form: React.FC<FormProps> = ({ initialValues = { username: "", password: "", remember: false }, rules = {}, onFinish, onFinishFailed, children }) => {
  const [values, setValues] = useState<InitialValuesType>(initialValues);
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  // Validation function
  const validate = () => {
    const newErrors: Record<string, string> = {};
    for (const field in rules) {
      const fieldRules = rules[field];
      const value = (values as any)[field];
      for (const rule of fieldRules) {
        if ("required" in rule && !value) {
          newErrors[field] = rule.message;
          break;
        }
        if ("min" in rule && value.length < rule.min) {
          newErrors[field] = rule.message;
          break;
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      onFinish?.(values);
      setValues(initialValues);
    } else {
      onFinishFailed?.(errors);
    }
  };

  return children({ values, errors, handleChange, handleSubmit });
};

export default Form;
