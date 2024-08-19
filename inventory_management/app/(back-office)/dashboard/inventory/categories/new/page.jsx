"use client"
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInput/SubmitButton";
import TextareaInput from "@/components/FormInput/TextareaInput";
import TextInput from "@/components/FormInput/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function NewCategories({initialData={},isUpdate=false}) {
  const router = useRouter();
  function redirect(){ 
    router.push("/dashboard/inventory/categories")
    router.refresh()
  }
  const [loading,setLoading]=useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:initialData,
  });
  async function onSubimit(data) {
    if(isUpdate){
      makePutRequest(setLoading,`/api/categories/${initialData.id}`,data,"Category",redirect)
    }else{
      makePostRequest(setLoading,"/api/categories",data,"Category",redirect)
    }
  }
return (
    <div>
      <FormHeader title={isUpdate?"Update Category":"New Category"} href="/dashboard/inventory/categories" />
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
        <SubmitButton isLoading={loading} title={isUpdate?"Updated Category":"New Category"}/>
      </form>
    </div>
  );
}
