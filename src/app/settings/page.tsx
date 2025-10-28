// SettingsPage.tsx

import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { updateUserProfile } from '../../services/clerk';
import { UserProfile } from '../../types/clerk';

interface SettingsPageProps {}

interface SettingsPageFormData {
  firstName: string;
  lastName: string;
  email: string;
}

const SettingsPageSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
});

const SettingsPage: React.FC<SettingsPageProps> = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsPageFormData>({
    resolver: yupResolver(SettingsPageSchema),
  });

  const onSubmit = async (data: SettingsPageFormData) => {
    try {
      await updateUserProfile(data);
      router.replace('/settings');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label htmlFor="email">Email</label>
        <input id="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default SettingsPage;