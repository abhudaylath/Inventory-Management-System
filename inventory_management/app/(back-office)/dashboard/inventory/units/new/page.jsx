"use client"
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInput/SubmitButton";
import TextInput from "@/components/FormInput/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function NewUnits({initialData={}, isUpdate=false}) {
  const [loading,setLoading]=useState(false);
  const router = useRouter();
  function redirect(){
    router.push("/dashboard/inventory/units")
    router.refresh()
  }
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
      makePutRequest(setLoading,`/api/units/${initialData.id}`,data,"Unit",redirect)
    }else{
      makePostRequest(setLoading,"/api/units",data,"Unit",redirect)
    }
  }
  return (
    <div>
      <FormHeader title={isUpdate?"Update Brand":"New Brand"} href="/dashboard/inventory/units" />
      <form
        onSubmit={handleSubmit(onSubimit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-4"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Unit Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Unit Abbreviation"
            name="abbreviation"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
        <SubmitButton isLoading={loading} title={isUpdate?"Updated Brand":"New Brand"}/>
      </form>
    </div>
  );
}