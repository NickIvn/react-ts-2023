import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import "./FormInput.css";
import { ICard } from "./Card/Card.props";
import { FormAdd } from "./utils/Form.type";

const FormInput: React.FC<{
  onAddCard: (member: ICard) => void;
}> = ({ onAddCard }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormAdd>();
  const validateDate = (date: string) => {
    const today = new Date();
    const inputDate = new Date(date);
    if (inputDate > today) {
      return "Date should be no later than today";
    }
    return true;
  };
  const [formMessage, setFormMessage] = useState<boolean>(false);
  const handlemember: SubmitHandler<FormAdd> = (data) => {
    const member = {
      id: Date.now(),
      ...data,
      imageUrl: URL.createObjectURL(data.imageUrl[0] as unknown as Blob),
    };
    onAddCard(member);
    reset();
    setFormMessage(true);
    setTimeout(() => setFormMessage(false), 4000);
  };

  return (
    <div className="box-form">
      <form role="form" onSubmit={handleSubmit(handlemember)}>
        <div className="form-box">
          <label className="form-label">Name:</label>
          <input
            className="form-input"
            type="text"
            id="name"
            placeholder="Enter name"
            {...register("name", {
              required: "The field is required",
              pattern: {
                value: /^[A-Z].*/,
                message: "Start with a capital letter",
              },
            })}
          />
          <p className="form-error">
            {errors.name?.message && errors.name.message}
          </p>
        </div>

        <div className="form-box">
          <label className="form-label">Surname:</label>
          <input
            className="form-input"
            type="text"
            id="surname"
            placeholder="Enter surname"
            {...register("surname", {
              required: "The field is required",
              pattern: {
                value: /^[A-Z].*/,
                message: "Start with a capital letter",
              },
            })}
          />
          <p className="form-error">
            {errors.surname?.message && errors.surname.message}
          </p>
        </div>

        <div className="form-box">
          <label className="form-label">Date Of Birth:</label>
          <input
            className="form-input"
            type="date"
            id="date"
            {...register("date", {
              required: "The field is required",
              validate: validateDate,
            })}
          />
          <p className="form-error">
            {errors.date?.message && errors.date.message}
          </p>
        </div>

        <div className="form-box">
          <label className="form-label">Gender:</label>
          <select
            className="form-input"
            {...register("gender", { required: "The field is required" })}
          >
            <option value="">-</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <p className="form-error">
            {errors.gender?.message && errors.gender.message}
          </p>
        </div>

        <div className="form-box">
          <label className="form-label">Category:</label>
          <label className="form-radio-label">
            <input
              className="form-radio-input"
              type="radio"
              id="professional"
              value="Professional"
              {...register("category", {
                required: "The field is required",
              })}
            />
            Professional
          </label>
          <label className="form-radio-label">
            <input
              className="form-radio-input"
              type="radio"
              value="Amateur"
              id="amateur"
              {...register("category", {
                required: "The field is required",
              })}
            />
            Amateur
          </label>
          <p className="form-error">
            {errors.category?.message && errors.category.message}
          </p>
        </div>
        <div className="form-box">
          <label className="form-label">Image:</label>
          <input
            className="form-input"
            type="file"
            accept=".jpg, .jpeg, .png"
            id="imageUrl"
            {...register("imageUrl", {
              required: "The field is required",
            })}
          />
          <p className="form-error">
            {errors.imageUrl?.message && errors.imageUrl.message}
          </p>
        </div>
        <div className="form-box">
          <label className="form-checkbox-label">
            <input
              id="rules"
              className="form-checkbox-input"
              type="checkbox"
              {...register("rules", {
                required: "The field is required",
              })}
            />
            I accept the rules.
          </label>
          <p className="form-error">
            {errors.rules?.message && errors.rules.message}
          </p>
        </div>
        <button className="form-button" type="submit">
          Add new member
        </button>
        {formMessage && <p className="form-add">The member has been added</p>}
      </form>
    </div>
  );
};

export default FormInput;
