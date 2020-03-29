import React from "react";

export default class Video extends React.Component {
  constructor(props) {
    console.log("App Version:: ", "0.6.4");
    super(props);
    this.state = {};
  }

  render() {
    const { url } = this.props;
    return (
      <div>
        <iframe
          width="1000px"
          height="100%"
          title={"recitalTitle"}
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}
