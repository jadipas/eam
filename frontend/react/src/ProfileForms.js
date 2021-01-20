import React from 'react';
import axiosInstance from './axios';

class ProfileForms extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      afm: "",
      amka: "",
      company: "",
      email: "",
      first_name: "",
      last_name: "",
      phone: "",
      role: "",
      username: "",
      old_password: "",
      new_password: "",
      new_rpassword: "",
      ct1: {},
      ct2: {},
      ct3: {},
      err: "Everything is fine right now. No errors to report ",
    }
    this.geData = this.geData.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitPassword = this.handleSubmitPassword.bind(this)
    this.declineEid = this.declineEid.bind(this)
    this.approveEid = this.approveEid.bind(this)
    this.declineTile = this.declineTile.bind(this)
    this.approveTile = this.approveTile.bind(this)
    this.declineAna = this.declineAna.bind(this)
    this.approveAna = this.approveAna.bind(this)

    this.props.navbarUpdate(this.props.path)
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  handleReset = (e) => {
    e.preventDefault()

    const path = '/authentication/profile' 

    axiosInstance
			.get(path)
			.then((res) => {
				//console.log(res);
        //console.log(res.data);
        this.setState({
          afm: res.data.afm,
          amka: res.data.amka,
          company: res.data.company,
          email: res.data.email,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          phone: res.data.phone,
          role: res.data.role,
          username: res.data.username,
          t: []
        })
      });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    axiosInstance
			.post(`/authentication/update_profile`, {
				email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        amka: this.state.amka,
        afm: this.state.afm,
        phone: this.state.phone,
			})
			.then((res) => {
				console.log(res);
				//console.log(res.data);
			});
  }

  handleSubmitPassword = (e) => {
    e.preventDefault()

    if(this.state.old_password === '' || this.state.new_password === '' || this.state.new_rpassword === ''){
      this.setState({
        err: "Παρακαλώ συμπληρώστε τον παλιο κωδικό, το νέο κωδικό και μετά επαναλάβετε ορθά το νέο κωδικό"
      })
      document.getElementById("errmsg").style.opacity = "1"; 
    }else if(this.state.new_password !== this.state.new_rpassword){
      this.setState({
        err: "Επαναλάβετε ορθά το νέο κωδικό"
      })
      document.getElementById("errmsg").style.opacity = "1"; 
    }else{
      axiosInstance
        .post(`/authentication/update_password`, {
          old_password: this.state.old_password,
          new_password: this.state.new_password,
          new_rpassword: this.state.new_rpassword,
        })
        .then((res) => {
          console.log(res);
          //console.log(res.data);
        })
        .catch(err => {
          this.setState({
            err: err.message
          })
          document.getElementById("errmsg").style.opacity = "1"; 
        });
    }
  }
  
  declineEid = (e) => {
    e.preventDefault()
    const path = '/forms/adeiaeidikoyskopoy/' + String(this.state.ct1[e.target.id])
    console.log(path)
    axiosInstance
      .post(path,{
        status: -1,
      })
      .then((res) => {
        console.log(res)
        document.getElementById(String(parseInt(e.target.id)-1)).style.opacity = "0"; 
        document.getElementById(e.target.id).style.opacity = "0"; 
      })
      .catch((err) =>{
        console.log(err)
      })
  }

  approveEid = (e) => {
    e.preventDefault()
    const path = '/forms/adeiaeidikoyskopoy/' + String(this.state.ct1[e.target.id])
    console.log(path)
    axiosInstance
      .post(path,{
        status: 1,
      })
      .then((res) => {
        console.log(res)
        document.getElementById(e.target.id).style.opacity = "0"; 
        document.getElementById(String(parseInt(e.target.id)+1)).style.opacity = "0"; 
      })
      .catch((err) =>{
        console.log(err)
      })
  }

  declineAna = (e) => {
    e.preventDefault()
    const path = '/forms/anastoliergasias/' + String(this.state.ct2[e.target.id])
    console.log(path)
    axiosInstance
      .post(path,{
        status: -1,
      })
      .then((res) => {
        console.log(res)
        document.getElementById(String(parseInt(e.target.id)-1)).style.opacity = "0"; 
        document.getElementById(e.target.id).style.opacity = "0"; 
      })
      .catch((err) =>{
        console.log(err)
      })
  }

  approveAna = (e) => {
    e.preventDefault()
    const path = '/forms/anastoliergasias/' + String(this.state.ct2[e.target.id])
    console.log(path)
    axiosInstance
      .post(path,{
        status: 1,
      })
      .then((res) => {
        console.log(res)
        document.getElementById(e.target.id).style.opacity = "0"; 
        document.getElementById(String(parseInt(e.target.id)+1)).style.opacity = "0"; 
      })
      .catch((err) =>{
        console.log(err)
      })
  }

  declineTile = (e) => {
    e.preventDefault()
    const path = '/forms/tilergasia/' + String(this.state.ct3[e.target.id])
    console.log(path)
    axiosInstance
      .post(path,{
        status: -1,
      })
      .then((res) => {
        console.log(res)
        document.getElementById(String(parseInt(e.target.id)-1)).style.opacity = "0"; 
        document.getElementById(e.target.id).style.opacity = "0"; 
      })
      .catch((err) =>{
        console.log(err)
      })
  }

  approveTile = (e) => {
    e.preventDefault()
    const path = '/forms/tilergasia/' + String(this.state.ct3[e.target.id])
    console.log(path)
    axiosInstance
      .post(path,{
        status: 1,
      })
      .then((res) => {
        console.log(res)
        document.getElementById(e.target.id).style.opacity = "0"; 
        document.getElementById(String(parseInt(e.target.id)+1)).style.opacity = "0"; 
      })
      .catch((err) =>{
        console.log(err)
      })
  }

  async geData(){
    
    if(this.props.role === 'employer'){
      const path2='/forms/myforms';
      axiosInstance
      .get(path2)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        var new_t1 = [];
        var new_t2 = [];
        var new_t3 = [];
        var nct1 = this.state.ct1;
        var nct2 = this.state.ct2;
        var nct3 = this.state.ct3;
        var n;
        var count=0;
        for(n of res.data.AdeiaEidikoySkopoy){
          var stat = ''
          if(parseInt(n.status) === -1){
            stat='Απορρίφθηκε'
          }else if(parseInt(n.status) === 0){
            stat='Σε Αναμονή'
          }else if(parseInt(n.status)===1){
            stat='Εγκρίθηκε'
          }
          if(parseInt(n.status) === 1 || parseInt(n.status) === -1){
            new_t1 = new_t1.concat([<tr key={n.id}>
              <td>{n.employee_username}</td>
              <td>{n.from_time}</td>
              <td>{n.to_time}</td>
              <td>{stat}</td>
            </tr>])
          }else{
            new_t1 = new_t1.concat([<tr key={n.id+count}>
              <td>{n.employee_username}</td>
              <td>{n.from_time}</td>
              <td>{n.to_time}</td>
              <td><button className="rst" style={{padding: '2px 5px', margin: '1px'}} id={count+1} onClick={this.declineEid}>Απόρριψη</button><button className="sbt" style={{padding: '2px 5px', margin: '1px'}} id={count} onClick={this.approveEid}>Έγκριση</button></td>
              </tr>])
            nct1[count] = n.id
            nct1[count+1] = n.id
          }
          count += 2;
        }

        for(n of res.data.AnastoliErgasias){
          var stat = ''
          if(parseInt(n.status) === -1){
            stat='Απορρίφθηκε'
          }else if(parseInt(n.status) === 0){
            stat='Σε Αναμονή'
          }else if(parseInt(n.status)===1){
            stat='Εγκρίθηκε'
          }
          if(parseInt(n.status) === 1 || parseInt(n.status) === -1){
            new_t2 = new_t2.concat([<tr key={n.id+count}>
              <td>{n.employee_username}</td>
              <td>{n.from_time}</td>
              <td>{n.to_time}</td>
              <td>{stat}</td>
            </tr>])
          }else{
            new_t2 = new_t2.concat([<tr key={n.id+count}>
              <td>{n.employee_username}</td>
              <td>{n.from_time}</td>
              <td>{n.to_time}</td>
              <td><button id={count+1} className="rst" style={{padding: '2px 5px', margin: '1px'}} onClick={this.declineAna}>Απόρριψη</button><button id={count} className="sbt" style={{padding: '2px 5px', margin: '1px'}} onClick={this.approveAna}>Έγκριση</button></td>
              </tr>])

            nct2[count] = n.id
            nct2[count+1] = n.id
          }
          count += 2;
        }

        for(n of res.data.Tilergasia){
          var stat = ''
          if(parseInt(n.status) === -1){
            stat='Απορρίφθηκε'
          }else if(parseInt(n.status) === 0){
            stat='Σε Αναμονή'
          }else if(parseInt(n.status)===1){
            stat='Εγκρίθηκε'
          }

          if(parseInt(n.status) === 1 || parseInt(n.status) === -1){
            new_t3 = new_t3.concat([<tr key={n.id+count}>
              <td>{n.employee_username}</td>
              <td>{n.from_time}</td>
              <td>{n.to_time}</td>
              <td>{stat}</td>
            </tr>])
          }else{
            new_t3 = new_t3.concat([<tr key={n.id+count}>
              <td>{n.employee_username}</td>
              <td>{n.from_time}</td>
              <td>{n.to_time}</td>
              <td><button className="rst" style={{padding: '2px 5px', margin: '1px'}} id={count+1} onClick={this.declineTile}>Απόρριψη</button><button className="sbt" style={{padding: '2px 5px', margin: '1px'}} id={count} onClick={this.approveTile}>Έγκριση</button></td>
              </tr>])
            nct3[count] = n.id
            nct3[count+1] = n.id
          }
          count += 2;
        }

        this.setState({
          t1: new_t1,
          t2: new_t2,
          t3: new_t3,
          ct1: nct1,
          ct2: nct2,
          ct3: nct3
        })
      })
      .catch((err) =>{
        console.log(err)
      })
    }else{
      const path2='/forms/myforms';
      axiosInstance
      .get(path2)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        var new_t = []
        var n;
        var count=0;
        for(n of res.data.AdeiaEidikoySkopoy){
          var stat = ''
          if(parseInt(n.status) === -1){
            stat='Απορρίφθηκε'
          }else if(parseInt(n.status) === 0){
            stat='Σε Αναμονή'
          }else if(parseInt(n.status)===1){
            stat='Εγκρίθηκε'
          }
          new_t = new_t.concat([<tr key={n.id}>
            <td>Ειδικού Σκοπού</td>
            <td>{n.from_time}</td>
            <td>{n.to_time}</td>
            <td>{stat}</td>
          </tr>])
          count+=1;
        }

        for(n of res.data.AnastoliErgasias){
          var stat = ''
          if(parseInt(n.status) === -1){
            stat='Απορρίφθηκε'
          }else if(parseInt(n.status) === 0){
            stat='Σε Αναμονή'
          }else if(parseInt(n.status)===1){
            stat='Εγκρίθηκε'
          }
          new_t = new_t.concat([<tr key={n.id+count}>
            <td>Αναστολή Εργασίας</td>
            <td>{n.from_time}</td>
            <td>{n.to_time}</td>
            <td>{stat}</td>
          </tr>])
          count+=1;
        }

        for(n of res.data.Tilergasia){
          var stat = ''
          if(parseInt(n.status) === -1){
            stat='Απορρίφθηκε'
          }else if(parseInt(n.status) === 0){
            stat='Σε Αναμονή'
          }else if(parseInt(n.status)===1){
            stat='Εγκρίθηκε'
          }
          new_t = new_t.concat([<tr key={n.id+count}>
            <td>Τηλεργασία</td>
            <td>{n.from_time}</td>
            <td>{n.to_time}</td>
            <td>{stat}</td>
          </tr>])
          count+=1;
        }

        this.setState({
          t: new_t,
        })
      })
      .catch((err) => {
        console.log('forms')
        console.log(err)
        console.log(err.message)
      })
    }
  }

  async componentDidMount() {
      //console.log(this.state.loading)
      await this.geData();
  }

  render(){    
    if(this.props.role === 'employer'){
      return (
          <div>
              <div className="wrapper row3">
                  <main className="hoc container clear"> 
                      <div className="content one_half first">
                        <br/>
                        <h2>Δηλώσεις Ειδικού Σκοπού</h2>
                        <br/>
                        <table>
                        <thead>
                            <tr>
                            <th>Όνομα Χρήστη Εργαζόμενου</th>
                            <th>Από</th>
                            <th>Εώς</th>
                            <th>Κατάσταση</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.t1}   
                        </tbody>
                        </table>
                      </div>
                      <div className="content one_half">
                        <br/>
                        <h2>Δηλώσεις Αναστολής Εργασίας</h2>
                        <br/>
                        <table>
                        <thead>
                            <tr>
                            <th>Όνομα Χρήστη Εργαζόμενου</th>
                            <th>Από</th>
                            <th>Εώς</th>
                            <th>Κατάσταση</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.t2}   
                        </tbody>
                        </table>
                      </div>
                      <div className="content one_half first">
                        <br/>
                        <h2>Δηλώσεις Τηλεργασίας</h2>
                        <br/>
                        <table>
                        <thead>
                            <tr>
                            <th>Όνομα Χρήστη Εργαζόμενου</th>
                            <th>Από</th>
                            <th>Εώς</th>
                            <th>Κατάσταση</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.t3}   
                        </tbody>
                        </table>
                      </div>
                      <div className="clear"></div>
                  </main>
              </div>
          </div>
      );
    }else{
      return (
        <div>
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div className="content ">
                      <h2>Ιστορικό Δηλώσεων</h2>
                      <br/>
                      <br/>
                      <table>
                      <thead>
                          <tr>
                          <th>Τύπος Άδειας</th>
                          <th>Από</th>
                          <th>Εώς</th>
                          <th>Κατάσταση</th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.state.t}   
                      </tbody>
                      </table>
                    </div>
                    <div className="clear"></div>
                </main>
            </div>
        </div>
    );
    }
  }
}

export default ProfileForms;


