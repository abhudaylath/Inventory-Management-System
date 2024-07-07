"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/dashboard/SelectInput";
import ImageInput from "@/components/FormInput/ImageInput";
import SubmitButton from "@/components/FormInput/SubmitButton";
import TextareaInput from "@/components/FormInput/TextareaInput";
import TextInput from "@/components/FormInput/TextInput";
import { UploadButton } from "@/lib/uploadthings";
import { UploadDropzone } from "@uploadthing/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function NewItem() {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    {
      label: "Electronics",
      value: "rdhejbkjefkjeb",
    },
    {
      label: "Clothes",
      value: "ljgbwlweownflw",
    },
  ];
  const units = [
    {
      label: "Kg",
      value: "rdhejbkjekegfkjeb",
    },
    {
      label: "Pcs",
      value: "ljggrbwlweownflw",
    },
  ];
  const brands = [
    {
      label: "Hp",
      value: "rdhejbkjekegfkjeb",
    },
    {
      label: "Dell",
      value: "ljggrbwlweownflw",
    },
  ];
  const warehouses = [
    {
      label: "Warehouse A",
      value: "rdhejbkjekegfkjeb",
    },
    {
      label: "Warehouse B",
      value: "ljggrbwlweownflw",
    },
  ];
  const suppliers = [
    {
      label: "Supplier A",
      value: "rdhejbkjekegfkjeb",
    },
    {
      label: "Supplier B",
      value: "ljggrbwlweownflw",
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
    data.imageUrl = imageUrl;
    console.log(data);
    setLoading(true);
    const baseURL = "http://localhost:3000";
    try {
      const response = await fetch(`${baseURL}/api/items`, {
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
    <div>
      <FormHeader title="New Item" href="/dashboard/inventory" />
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
          <ImageInput label="Item Image" imageUrl={imageUrl} endpoint="imageUploader" setImageUrl={setImageUrl}/>
        </div>
        <SubmitButton isLoading={loading} title="Item" />
      </form>
    </div>
  );
}
