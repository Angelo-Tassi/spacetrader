import { useState } from 'react';

function Register() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  const handleUserName = (e) => setUser(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      symbol: 'user',
      faction: 'COSMIC',
    }),
  };

try {
      const response = await
  fetch('https://api.spacetraders.io/v2/register', options);
    // .then((response) => response.json())
    // .then((data) => {
    //   const registrationData = data;
    const data = await response.json();
    //   setToken(registrationData);
    console.log(data);
    setToken(data)
       } catch (error) {
      console.error(error);
    }

    //   console.log(registrationData);
    // })
    // .catch((err) => console.error(err));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            value={user}
            type="text"
            placeholder="Choose Captain Name"
            onChange={handleUserName}
          ></input>
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;
