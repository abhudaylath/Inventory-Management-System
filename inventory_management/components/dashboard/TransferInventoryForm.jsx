"use client";
import SelectInput from "@/components/dashboard/SelectInput";
import SubmitButton from "@/components/FormInput/SubmitButton";
import TextareaInput from "@/components/FormInput/TextareaInput";
import TextInput from "@/components/FormInput/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function TransferInventoryForm({ items, warehouse }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/inventory/adjustments");
    router.refresh();
  }
  async function onSubimit(data) {
    makePostRequest(
      setLoading,
      "/api/adjustments/transfer",
      data,
      "Adjustment",
      redirect
    );
  }
  return (
    <div><form
    
        onSubmit={handleSubmit(onSubimit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-4"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Refernce Number"
            name="referenceNumber"
            register={register}
            errors={errors}
          />
          <SelectInput
            register={register}
            label="Select the Item"
            name="itemId"
            options={items}
            className="w-full"
          />
          <TextInput
            label="Amount of stock to be transfered"
            name="transferStockQty"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            register={register}
            label="Select the Warehouse that will give the stock"
            name="givingWarehouseId"
            options={warehouse}
            className="w-full"
          />
          <SelectInput
            register={register}
            label="Select the Warehouse that will receive the stock"
            name="receivingWarehouseId"
            options={warehouse}
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
    </div>
  );
}
