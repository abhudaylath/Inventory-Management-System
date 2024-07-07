"use client";
import SelectInput from "@/components/dashboard/SelectInput";
import SubmitButton from "@/components/FormInput/SubmitButton";
import TextareaInput from "@/components/FormInput/TextareaInput";
import TextInput from "@/components/FormInput/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function TransferInventoryForm() {
  const branches = [
    {
      label: "BranchA",
      value: "Main",
    },
    {
      label: "BranchB",
      value: "Branch",
    },
  ];
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function onSubimit(data) {
    console.log(data);
    setLoading(true);
    const baseURL = "http://localhost:3000";
    try {
      const response = await fetch(`${baseURL}/api/warehouse/transfer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubimit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-4"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Amount of stock to be transfered"
          name="transferStockQty"
          register={register}
          errors={errors}
        />
        <SelectInput
          register={register}
          label="Select the Warehouse that will give the stock"
          name="givingWarehouseId"
          options={branches}
          className="w-full"
        />
        <SelectInput
          register={register}
          label="Select the Warehouse that will receive the stock"
          name="receivingWarehouseId"
          options={branches}
          className="w-full"
        />
        <TextareaInput
          label="Adjustment Notes"
          name="notes"
          register={register}
          errors={errors}
        />
      </div>
      <SubmitButton isLoading={loading} title="adjustment" />
    </form>
  );
}
