import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // mode: 'onBlur',
    defaultValues: {
      name: '',
    },
  });

  function submit(values) {
    console.log(values);
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: '#fefefe', height: '100vh', width: '100%' }}
    >
      <form onSubmit={handleSubmit(submit)}>
        <div className="d-flex flex-column mb-20">
          <label htmlFor="name" className="mb-5">
            Nom
          </label>
          <input
            id="name"
            type="text"
            {...register('name', {
              disabled: false,
              required: 'Le champ est obligatoire',
              maxLength: { value: 25, message: 'Trop long !' },
              minLength: { value: 2, message: 'Trop court !' },
              validate(value) {
                if (value === 'Jean') {
                  return true;
                } else {
                  return 'Mauvais prénom';
                }
              },
            })}
          />
          {errors?.name && (
            <p style={{ color: 'red' }}>{errors.name.message}</p>
          )}
        </div>
        <div className="d-flex flex-column mb-20">
          <label htmlFor="name" className="mb-5">
            Age
          </label>
          <input
            id="age"
            type="number"
            {...register('age', {
              valueAsNumber: true,
              required: 'Champ requis',
            })}
          />
          {errors?.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
        </div>
        <button className="btn btn-primary">Sauvegarder</button>
      </form>
    </div>
  );
}

export default App;
