import { useState } from "react";

const Form = ({ initialValues = {}, rules = {}, onFinish, onFinishFailed, children }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  // Validation function
  const validate = () => {
    const newErrors = {};
    for (const field in rules) {
      const fieldRules = rules[field];
      const value = values[field];
      for (const rule of fieldRules) {
        if (rule.required && !value) {
          newErrors[field] = rule.message;
          break;
        }
        if (rule.min && value.length < rule.min) {
          newErrors[field] = rule.message;
          break;
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
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
