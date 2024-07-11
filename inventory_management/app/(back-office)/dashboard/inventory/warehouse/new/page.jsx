"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/dashboard/SelectInput";
import SubmitButton from "@/components/FormInput/SubmitButton";
import TextareaInput from "@/components/FormInput/TextareaInput";
import TextInput from "@/components/FormInput/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function NewWarehouse({initialData={},isUpdate=false}) {
  const router = useRouter();
  function redirect(){ 
    router.push("/dashboard/inventory/warehouse")
    router.refresh()
  }
  const selectOptions = [
    {
      title: "Main",
      id: "Main",
    },
    {
      title: "Branch",
      id: "Branch",
    },
  ];
  const [loading, setLoading] = useState(false);
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
      makePutRequest(setLoading,`/api/warehouse/${initialData.id}`,data,"Warehouse",redirect)
    }else{
      makePostRequest(setLoading,"/api/warehouse",data,"Warehouse",redirect)
    }
  }
  return (
    <div>
      <FormHeader title={isUpdate?"Update Warehouse":"New Warehouse"} href="/dashboard/inventory/warehouse" />
      <form
        onSubmit={handleSubmit(onSubimit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-4"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <SelectInput
            register={register}
            label="Select the warehouse type"
            name="type"
            options={selectOptions}
            className="w-full"
          />
          <TextInput
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Warehouse Location"
            name="location"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Warehouse description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={loading} title={isUpdate?"Updated Warehouse":"New Warehouse"} />
      </form>
    </div>
  );
} 