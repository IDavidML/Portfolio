'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Contacto() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });

  const contactStatuses = {
    loading: 'loading',
    submitted: 'submitted',
    error: 'error'
  };

  const [status, setStatus] = useState<string>();

  const onSubmit = (data : any, e : any) => {
    const abortLongFetch = new AbortController();
    const abortTimeoutId = setTimeout(() => abortLongFetch.abort(), 7000);

    e.preventDefault();

    setStatus(contactStatuses.loading);

    fetch('/api/contacto', {
      signal: abortLongFetch.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.ok) {
          clearTimeout(abortTimeoutId);
          return res.json();
        }
        throw new Error('Whoops! Error sending email.');
      })
      .then((res) => {
        setStatus(contactStatuses.submitted);
        reset();
      })
      .catch((err) => {
        setStatus(contactStatuses.error);
      });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const requiredFieldErrorMsg = 'Este campo es requerido';

  return (
    <div className='grid place-content-center mt-40'>
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        {
          status === contactStatuses.error ? (
            <div className="bg-red-500 text-white rounded-lg p-4 mb-8">
              Oops, se ha producido un error al enviarlo, inténtelo de nuevo.
            </div>
          ) : null
        }
        {
          status === contactStatuses.submitted ? (
            <div className="bg-green-700 text-white rounded-lg p-4 mb-8" role="alert">
              Tu mensaje se ha enviado correctamente.
            </div>
          ) : null
        }
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide dark:text-blue-400 text-black text-xs font-bold mb-2">
              Nombre
            </label>
            <input 
              className="appearance-none block w-full bg-white/20 transition-colors text-white/80 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white/30" 
              id="grid-first-name" 
              type="text" 
              placeholder="Jane"
              aria-invalid={errors.name}
              aria-describedby="name-error"
              autoComplete="name"
              {...register('name', { required: requiredFieldErrorMsg })}
              />
            {errors.name && (
              <span id="name-error" className="formValidationError">
                {requiredFieldErrorMsg}
              </span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide dark:text-blue-400 text-black text-xs font-bold mb-2">
              Apellidos
            </label>
            <input 
              className="appearance-none block w-full bg-white/20 transition-colors text-white/80 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white/30" 
              id="grid-lastname" 
              type="text" 
              placeholder="Conor"
              aria-invalid={errors.name}
              aria-describedby="lastname-error"
              autoComplete="lastname"
              {...register('lastname', { required: requiredFieldErrorMsg })}
              />
            {errors.lastname && (
              <span id="lastname-error" className="formValidationError">
                {requiredFieldErrorMsg}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide dark:text-blue-400 text-black text-xs font-bold mb-2">
              E-mail
            </label>
            <input 
              className="appearance-none block w-full bg-white/20 transition-colors text-white/80 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white/30" 
              id="email" 
              type="email" 
              placeholder='ejemplo@gmail.com'
              aria-invalid={errors.email}
              aria-describedby="email-error"
              autoComplete="email"
              {...register('email', {
                required: requiredFieldErrorMsg,
                pattern: {
                  value: emailRegex,
                  message:
                    'Se necesita un email válido. Ejemplo: nombre@dominio.com.'
                }
              })}
              />
            {errors.email && (
              <span id="email-error" className="formValidationError">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide dark:text-blue-400 text-black text-xs font-bold mb-2">
              Mensaje
            </label>
            <textarea 
              className="no-resize appearance-none block w-full transition-colors bg-white/20 text-white/80 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white/30 h-48 resize-none" 
              id="message"
              aria-invalid={errors.message}
              aria-describedby="message-error"
              {...register('message', {
                required: requiredFieldErrorMsg
              })}
              >
            </textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button 
              className="shadow bg-blue-400 hover:bg-blue-500 transition-colors focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
              type="submit"
              disabled={status === contactStatuses.loading}
              >
                {status === contactStatuses.loading ? (
                  <>
                    Enviando...
                  </>
                ) : (
                  <>Enviar</>
                )}
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  )
}

export default Contacto