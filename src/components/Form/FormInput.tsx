import React from "react";
import "./FormInput.css";
import { IFormValid } from "./utils/Form.props";
import { FormAdd } from "./utils/Form.type";
import {
  validateName,
  validateSurname,
  validateImageUrl,
  validateDate,
  validateCategory,
  validateGender,
} from "./utils/validates";
import { targetRadio } from "./utils/targetRadio";

class FormInput extends React.Component<FormAdd, IFormValid> {
  inputNameRef: React.RefObject<HTMLInputElement>;
  inputSurnameRef: React.RefObject<HTMLInputElement>;
  inputImageRef: React.RefObject<HTMLInputElement>;
  inputdatehRef: React.RefObject<HTMLInputElement>;
  inputCategoryRefAmateur: React.RefObject<HTMLInputElement>;
  inputCategoryRefProfessional: React.RefObject<HTMLInputElement>;
  inputRulesRef: React.RefObject<HTMLInputElement>;
  inputGenderRef: React.RefObject<HTMLSelectElement>;

  constructor(props: FormAdd) {
    super(props);
    this.state = {
      nameValid: false,
      surnameValid: false,
      imageValid: false,
      imageUrl: "",
      dateValid: false,
      rulesValid: false,
      genderValid: false,
      categoryValid: false,
      message: false,
      formMessage: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputNameRef = React.createRef();
    this.inputSurnameRef = React.createRef();
    this.inputImageRef = React.createRef();
    this.inputdatehRef = React.createRef();
    this.inputCategoryRefAmateur = React.createRef();
    this.inputCategoryRefProfessional = React.createRef();
    this.inputRulesRef = React.createRef();
    this.inputGenderRef = React.createRef();
  }

  checkAllValidates() {
    const name = validateName(this.inputNameRef?.current?.value ?? "");
    const surname = validateSurname(this.inputSurnameRef?.current?.value ?? "");
    const image = validateImageUrl(this.inputImageRef?.current?.value ?? "");
    const date = validateDate(this.inputdatehRef.current?.value ?? "");
    const category = validateCategory(
      targetRadio(
        this.inputCategoryRefAmateur,
        this.inputCategoryRefProfessional
      )
    );
    const rules = this.inputRulesRef?.current?.checked ?? false;
    const gender = validateGender(this.inputGenderRef.current?.value ?? "");

    this.setState({ rulesValid: rules });
    this.setState({ nameValid: name });
    this.setState({ surnameValid: surname });
    this.setState({ imageValid: image });
    this.setState({ dateValid: date });
    this.setState({ categoryValid: category });
    this.setState({ rulesValid: rules });
    this.setState({ genderValid: gender });

    if (name && surname && image && date && category && rules && gender)
      return true;
    return false;
  }

  clearForms() {
    if (this.inputNameRef.current) this.inputNameRef.current.value = "";
    if (this.inputSurnameRef.current) this.inputSurnameRef.current.value = "";
    if (this.inputImageRef.current) this.inputImageRef.current.value = "";
    if (this.inputdatehRef.current) this.inputdatehRef.current.value = "";
    if (this.inputCategoryRefAmateur.current)
      this.inputCategoryRefAmateur.current.checked = false;
    if (this.inputCategoryRefProfessional.current)
      this.inputCategoryRefProfessional.current.checked = false;
    if (this.inputRulesRef.current) this.inputRulesRef.current.checked = false;
    if (this.inputGenderRef.current) this.inputGenderRef.current.value = "";
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const isAllValid = this.checkAllValidates();

    const currentName = this.inputNameRef.current?.value ?? "";
    const currentSurname = this.inputSurnameRef.current?.value ?? "";
    const currentImage = this.inputImageRef.current?.files?.[0];
    const currentDate = this.inputdatehRef.current?.value ?? "";
    const currentCategory = targetRadio(
      this.inputCategoryRefAmateur,
      this.inputCategoryRefProfessional
    );
    const currentRules = this.inputRulesRef?.current?.checked ?? false;
    const currentGender = this.inputGenderRef.current?.value ?? "";

    if (!isAllValid) {
      this.setState({ message: true });
      return;
    }

    const card = {
      id: Math.trunc(Math.random() * 1e8),
      name: currentName,
      surname: currentSurname,
      imageUrl: (currentImage && URL.createObjectURL(currentImage)) ?? "",
      date: currentDate,
      rules: currentRules,
      category: currentCategory,
      gender: currentGender,
    };

    this.setState({
      nameValid: validateName(currentName),
      surnameValid: validateSurname(currentSurname),
      imageValid: validateImageUrl(this.inputImageRef?.current?.value ?? ""),
      dateValid: validateDate(currentDate),
      categoryValid: validateCategory(currentCategory),
      genderValid: validateGender(currentGender),
      rulesValid: currentRules,
    });

    this.clearForms();
    this.props.onAddCard(card);
    this.setState({ formMessage: true });
    setTimeout(() => {
      this.setState({ formMessage: false });
    }, 3000);
  }
  render() {
    return (
      <div className="box-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-box">
            <label className="form-label">Name:</label>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Enter name"
              ref={this.inputNameRef}
            />
            {!this.state.nameValid && this.state.message && (
              <p className="form-error">
                The name must start with a capital letter and contain only
                letters longer than 1 digits.
              </p>
            )}
          </div>

          <div className="form-box">
            <label className="form-label">Surname:</label>
            <input
              className="form-input"
              type="text"
              name="surname"
              placeholder="Enter surname"
              ref={this.inputSurnameRef}
            />
            {!this.state.surnameValid && this.state.message && (
              <p className="form-error">
                The surname must start with a capital letter and contain only
                letters longer than 1 digits.
              </p>
            )}
          </div>

          <div className="form-box">
            <label className="form-label">Date Of Birth:</label>
            <input
              className="form-input"
              type="date"
              name="date"
              ref={this.inputdatehRef}
            />
            {!this.state.dateValid && this.state.message && (
              <p className="form-error">
                The selected date must be earlier than today.
              </p>
            )}
          </div>

          <div className="form-box">
            <label className="form-label">Gender:</label>
            <select
              className="form-input"
              name="gender"
              ref={this.inputGenderRef}
            >
              <option value="">-</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {!this.state.genderValid && this.state.message && (
              <p className="form-error">Please select a gender.</p>
            )}
          </div>

          <div className="form-box">
            <label className="form-label">Category:</label>
            <label className="form-radio-label">
              <input
                className="form-radio-input"
                type="radio"
                name="category"
                value="Professional"
                ref={this.inputCategoryRefProfessional}
              />
              Professional
            </label>
            <label className="form-radio-label">
              <input
                className="form-radio-input"
                type="radio"
                name="category"
                value="Amateur"
                ref={this.inputCategoryRefAmateur}
              />
              Amateur
            </label>
            {!this.state.categoryValid && this.state.message && (
              <p className="form-error">Please select a category.</p>
            )}
          </div>

          <div className="form-box">
            <label className="form-label">Image:</label>
            <input
              className="form-input"
              name="imageUrl"
              type="file"
              accept=".jpg, .jpeg, .png"
              id="image-input"
              ref={this.inputImageRef}
            />
            {!this.state.imageValid && this.state.message && (
              <p className="form-error">Please select a valid image file.</p>
            )}
          </div>

          <div className="form-box">
            <label className="form-checkbox-label">
              <input
                className="form-checkbox-input"
                type="checkbox"
                ref={this.inputRulesRef}
              />
              I accept the rules.
            </label>
            {!this.state.rulesValid && this.state.message && (
              <p className="form-error">Please accept the rules.</p>
            )}
          </div>
          <button className="form-button" type="submit">
            Add new member
          </button>
          {this.state.formMessage && (
            <p className="form-add">Member successfully added.</p>
          )}
        </form>
      </div>
    );
  }
}

export { FormInput };
