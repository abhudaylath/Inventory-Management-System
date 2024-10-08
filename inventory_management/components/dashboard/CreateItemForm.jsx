"use client";
import SelectInput from "@/components/dashboard/SelectInput";
import ImageInput from "@/components/FormInput/ImageInput";
import SubmitButton from "@/components/FormInput/SubmitButton";
import TextareaInput from "@/components/FormInput/TextareaInput";
import TextInput from "@/components/FormInput/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function CreateItemForm({categories,units,brands,warehouses,suppliers,initialData={}, isUpdate=false}) {
  const router = useRouter();
  function redirect(){ 
    router.push("/dashboard/inventory/items")
    router.refresh()
  }
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl);
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
    data.imageUrl = imageUrl || "";
    if(isUpdate){
      makePutRequest(setLoading,`/api/items/${initialData.id}`,data,"Item",redirect)
    }else{
      makePostRequest(setLoading,"/api/items",data,"Item",redirect)
    }
    setImageUrl("");
  }
  return (
    <form
      onSubmit={handleSubmit(onSubimit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-4"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Item Title"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          register={register}
          label="Select the Item Category"
          name="categoryId"
          options={categories}
          className="w-full"
        />
        <TextInput
          label="Item SKU(Stock Keeping Unit)"
          name="sku"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Item Barcode"
          name="barcode"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Item Quantity"
          name="qty"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          register={register}
          label="Select the Item Unit"
          name="unitId"
          options={units}
          className="w-full"
        />
        <SelectInput
          register={register}
          label="Select the Item Brand"
          name="brandId"
          options={brands}
          className="w-full"
        />
        <TextInput
          label="Buying Price"
          name="buyingPrice"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Selling Price"
          name="sellingPrice"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          register={register}
          label="Select the Item Supplier"
          name="supplierID"
          options={suppliers}
          className="w-full"
        />
        <TextInput
          label="Re-order Point"
          name="reOrderPoint"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          register={register}
          label="Select the Item Warehouse"
          name="warehouseId"
          options={warehouses}
          className="w-full"
        />
        <TextInput
          label="Item Weight in Kg"
          name="weight"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Item Dimension in cm(10x20x10)"
          name="dimensions"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Item Tax Rate in %"
          name="taxRate"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextareaInput
          label="Item Description"
          name="description"
          register={register}
          errors={errors}
        />
        <TextareaInput
          label="Item Notes"
          name="notes"
          register={register}
          errors={errors}
        />
        <ImageInput label="Item Image" imageUrl={imageUrl} endpoint="imageUploader" setImageUrl={setImageUrl} register={register} errors={errors}/>
      </div>
      <SubmitButton isLoading={loading} title={isUpdate?"Updated Item":"New Item"} />
    </form>
  );
}