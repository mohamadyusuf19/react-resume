import React, { Component } from "react";
import { connect } from "react-redux";
import { educationActions } from "../../redux/actions/formActions";
import Content from "../../components/content/Content";
import Education from "../../components/content/education/Education";

class EducationContainer extends Component {
  render() {
    return (
      <Content>
        <Education
          onSubmitValues={values => this.props.educationActions(values)}
          redirect={() => this.props.history.push("/experience")}
          onClickBack={() => this.props.history.goBack()}
        />
      </Content>
    );
  }
}

export default connect(
  null,
  { educationActions }
)(EducationContainer);
