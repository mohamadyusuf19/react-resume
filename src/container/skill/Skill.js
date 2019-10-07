import React, { Component } from "react";
import { connect } from "react-redux";
import { skillActions } from "../../redux/actions/formActions";
import Content from "../../components/content/Content";
import Skill from "../../components/content/skill/Skill";

class SkillContainer extends Component {
  render() {
    return (
      <Content>
        <Skill
          onSubmitValues={values => this.props.skillActions(values)}
          redirect={() => this.props.history.push("/")}
          onClickBack={() => this.props.history.goBack()}
        />
      </Content>
    );
  }
}

export default connect(
  null,
  { skillActions }
)(SkillContainer);
