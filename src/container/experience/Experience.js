import React, { Component } from "react";
import { connect } from "react-redux";
import { experienceActions } from "../../redux/actions/formActions";
import Content from "../../components/content/Content";
import Experience from "../../components/content/experience/Experience";

class ExperienceContainer extends Component {
  render() {
    return (
      <Content>
        <Experience
          onSubmitValues={values => this.props.experienceActions(values)}
          redirect={() => this.props.history.push("/skill")}
          onClickBack={() => this.props.history.goBack()}
        />
      </Content>
    );
  }
}

export default connect(
  null,
  { experienceActions }
)(ExperienceContainer);
