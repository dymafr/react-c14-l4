import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function App() {
  const schema = yup.object({
    name: yup
      .string()
      .required('Le champ est obligatoire')
      .min(2, 'Trop court')
      .max(5, 'Trop long'),
    age: yup
      .number()
      .typeError('Veuillez entre un nombre')
      .min(18, 'Trop jeune'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
    },
    resolver: yupResolver(schema),
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
          <input id="name" type="text" {...register('name')} />
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
