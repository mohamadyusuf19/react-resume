import React, { Component } from "react";
import { connect } from "react-redux";
import { personalActions } from "../../redux/actions/formActions";
import Content from "../../components/content/Content";
import Personal from "../../components/content/personal/Personal";

class PersonalContainer extends Component {
  render() {
    return (
      <Content>
        <Personal
          onSubmitValues={values => this.props.personalActions(values)}
          redirect={() => this.props.history.push("/education")}
          onClickBack={() => this.props.history.goBack()}
        />
      </Content>
    );
  }
}

export default connect(
  null,
  { personalActions }
)(PersonalContainer);
