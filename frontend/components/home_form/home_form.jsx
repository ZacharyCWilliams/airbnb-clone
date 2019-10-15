import React from "react";
import { Link } from "react-router-dom";

const homeLogoSvg = () => {
  return (
    <svg viewBox={"0 0 1000 1000"} className={"link-li add-home-logo"} role={"presentation"}>
      <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z" />
    </svg>
  )
} 

class HomeForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      price: "",
      long: "",
      lat: "",
      photos: []
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('home[title]', this.state.title);
    formData.append("home[price]", this.state.price);
    formData.append("home[long]", this.state.long);
    formData.append("home[lat]", this.state.lat);
    for (let i = 0; i < this.state.photos.length; i++) {
      formData.append('home[photos][]', this.state.photos[i]);
    }
    this.props.createHome(formData)
    
  }

  handleFile(e) {
    this.setState({
      photos: e.target.files
    })
  }

  render() {
    return (
      <div>
        <nav className="create-home-nav">
          <Link to="/homes">{homeLogoSvg()}</Link>
          <Link className="link-li" to="/homes">Back</Link>
        </nav>
        <form onSubmit={this.handleSubmit}>
          <div className="add-a-home">
            <div className="progress-bar">
                
            </div>
            
            <h1 className="welcome-text">{this.props.formType}</h1>
            <label className="input-label">
              <p className="input-label-title add-home-label-title">Title</p>
              <input className="form-input add-home-input" placeholder={"Give your home a title"} value={this.state.title} onChange={this.update("title")} />
            </label>
            <label className="input-label">
              <p className="input-label-title add-home-label-title">Price</p>
              <input className="form-input add-home-input" placeholder={"Set a price"} value={this.state.price} onChange={this.update("price")} />
            </label>
            <label className="input-label">
              <p className="input-label-title add-home-label-title">Lattitude</p>
              <input className="form-input add-home-input" placeholder={"Add a lattitude"} value={this.state.lat} onChange={this.update("lat")} />
            </label>
            <label className="input-label">
              <p className="input-label-title add-home-label-title">Longitude</p>
              <input className="form-input add-home-input" placeholder={"Add a longitude"} value={this.state.long} onChange={this.update("long")} />
            </label>
            <label className="input-label-title add-home-label-title">
              <p className="input-label add-home-label-title">Upload a photo</p>
              <input type="file" className="add-new-photo" onChange={this.handleFile.bind(this)} multiple/>
            </label>
            <br />
            <input className="session-submit add-new-home-button" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    )
  }


};

export default HomeForm