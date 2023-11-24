'use client'

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { loginCall } from "./networking/endpoints/robots";

export default function App() {

  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [msgAlert, setMsgAlert] = useState("");
  const [msgSeverity, setMsgSeverity] = useState("success");
  const router = useRouter();
  const [openAlert, setOpenAlert] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const redirectTimeoutId = () => {
    loginCall(email)
      .then(res=> {
        if (email == "manny@manny.com.ar" || "manny@manny.com") {
          setMsgAlert("Bienvenido Manny!");
          setOpenAlert(true);
          setTimeout(() => {
            router.push('/home');
          }, 2000);
        } else {
          setMsgSeverity("error");
          setMsgAlert("Usuario no válido.");
          setOpenAlert(true);
        }
      })
      .catch(res=> {
        if (email == "manny@manny.com.ar" || "manny@manny.com") {
          setMsgAlert("Bienvenido Manny!");
          setOpenAlert(true);
          setTimeout(() => {
            router.push('/home');
          }, 2000);
        } else {
          setMsgSeverity("error");
          setMsgAlert("Usuario no válido.");
          setOpenAlert(true);
        }})
  };

  return (
    <main>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Inicie sesión en su cuenta</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" method="POST">
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo electrónico</label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button onClick={redirectTimeoutId} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
            </div>
          </form>

        </div>
        <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={msgSeverity} sx={{ width: '100%' }}>
            {msgAlert}
          </Alert>
        </Snackbar>
      </div>
    </main>
  );
}
