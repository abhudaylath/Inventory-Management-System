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
            toast.error('Something went wrong')
        }
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
}

export async function makePutRequest(setLoading,url,data,resourceName, redirect) {
    try {
        const baseURL = "http://localhost:3000";
        setLoading(true);
        const response = await fetch(`${baseURL}${url}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log(response);
            setLoading(false);
            toast.success(`${resourceName} Updated Successfully`)
            redirect();
        }else{
            setLoading(false);
            toast.error('Something went wrong')
        }
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
}