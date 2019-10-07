import React, { Component } from "react";
import { connect } from "react-redux";
import Content from "../../components/content/Content";
import Preview from "../../components/preview/Preview";

class Home extends Component {
  render() {
    const {
      personalData,
      educationData,
      skillData,
      experienceData
    } = this.props;
    return (
      <Content>
        <Preview
          nama={personalData.nama}
          tempat={personalData.tempat}
          pekerjaan={personalData.pekerjaan}
          whatsapp={personalData.whatsapp}
          email={personalData.email}
          alamat={personalData.alamat}
          deskripsi={personalData.deskripsi}
          sd={educationData.sd}
          smp={educationData.smp}
          sma={educationData.sma}
          kerja={experienceData.kerja}
          html={skillData.html}
          css={skillData.css}
          js={skillData.js}
        />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  personalData: state.formReducers.personalData,
  educationData: state.formReducers.educationData,
  skillData: state.formReducers.skillData,
  experienceData: state.formReducers.experienceData
});

export default connect(mapStateToProps)(Home);
