import toast from "react-hot-toast";

export async function makePostRequest(setLoading,url,data,resourceName, reset) {
    try {
        const baseURL = "http://localhost:3000";
        setLoading(true);
        const response = await fetch(`${baseURL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log(response);
            setLoading(false);
            toast.success(`${resourceName} Created Successfully`)
            reset();
        }else{
            setLoading(false);
            toast.success('Something went wrong')
        }
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
}