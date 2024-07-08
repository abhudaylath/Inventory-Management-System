"use client"
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInput/SubmitButton";
import TextareaInput from "@/components/FormInput/TextareaInput";
import TextInput from "@/components/FormInput/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export default function NewCategories() {
  const [loading,setLoading]=useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function onSubimit(data) {
    console.log(data);
    setLoading(true);
    const baseURL = "http://localhost:3000"
    try {
      const response = await fetch(`${baseURL}/api/categories`,{method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    if(response.ok){
      console.log(response);
      setLoading(false);
      toast.success('Category created successfully')
      reset();
    }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      <FormHeader title="New Category" href="/dashboard/inventory" />
      <form
        onSubmit={handleSubmit(onSubimit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-4"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput label="Category description"
              name="description"
              register={register}
              errors={errors}/>
        </div>
        <SubmitButton isLoading={loading} title="category"/>
      </form>
    </div>
  );
}
