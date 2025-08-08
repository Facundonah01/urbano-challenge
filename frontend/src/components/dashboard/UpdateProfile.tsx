import { useState } from 'react';
import { Loader, Settings } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import useAuth from '../../hooks/useAuth';
import UpdateUserRequest from '../../models/user/UpdateUserRequest';
import userService from '../../services/UserService';
import Input from '../shared/Input';

export default function UpdateProfile() {
  const { authenticatedUser } = useAuth();
  const [error, setError] = useState<string>();

  const { data, isLoading, refetch } = useQuery(
    `user-${authenticatedUser.id}`,
    () => userService.findOne(authenticatedUser.id),
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = useForm<UpdateUserRequest>();

  const handleUpdateUser = async (updateUserRequest: UpdateUserRequest) => {
    try {
      if (updateUserRequest.username === data.username) {
        delete updateUserRequest.username;
      }
      await userService.update(authenticatedUser.id, updateUserRequest);
      setError(null);
      setValue('password', '');
      refetch();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  if (!isLoading) {
    return (
      <div className="card shadow w-full max-w-2xl mx-auto mt-5">
        <form
          className="flex flex-col gap-3 justify-center my-5 mx-10 items-center"
          onSubmit={handleSubmit(handleUpdateUser)}
        >
          <div className="w-14 h-14 rounded-full bg-white-hover flex items-center justify-center">
            <Settings size={24} className="text-brand-primary" />
          </div>
          <div className="mb-8">
            <h1 className="font-normal text-xl text-center">
              Profile settings
            </h1>
            <h3 className="font-light text-sm text-secundary-text text-center">
              Update your credentials and personal information
            </h3>
          </div>

          <div className="flex gap-3 w-full">
            <div className="w-1/2">
              <label className="font-normal">First Name</label>
              <Input
                type="text"
                placeholder="First Name"
                defaultValue={data.firstName}
                disabled={isSubmitting}
                {...register('firstName')}
              />
            </div>
            <div className="w-1/2">
              <label className="font-normal">Last Name</label>
              <Input
                type="text"
                placeholder="Last Name"
                defaultValue={data.lastName}
                disabled={isSubmitting}
                {...register('lastName')}
              />
            </div>
          </div>
          <div className="w-full">
            <label className="font-normal">Username</label>
            <Input
              type="text"
              placeholder="Username"
              defaultValue={data.username}
              disabled={isSubmitting}
              {...register('username')}
            />
          </div>
          <div className="w-full">
            <label className="font-normal">Password</label>
            <Input
              type="password"
              placeholder="Password (min 6 characters)"
              disabled={isSubmitting}
              {...register('password')}
            />
          </div>
          <button className="btn w-full mt-8" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader className="animate-spin mx-auto" />
            ) : (
              'Update'
            )}
          </button>
          {error ? (
            <div className="text-red-500 p-3 font-semibold border rounded-md bg-red-50">
              {error}
            </div>
          ) : null}
        </form>
      </div>
    );
  }

  return null;
}
