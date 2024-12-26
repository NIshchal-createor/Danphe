
import { useState, ChangeEvent } from "react";

interface authValues {
  email: string;
  password: string;
  brand_name: string;
  total_quantity: number;
  price: number;
  colour: string;
  quantity: string;
  brand_desc: string;
  brand_image: Array<File>;
  product_image: Array<File>;
}

export const useForm: any = (initalvalues: authValues) => {
  const [states, setStates] = useState<authValues>(initalvalues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({}) as any;

  const validate = (fieldValues = states as any) => {
    const {
      email,
      password,
      brand_name,
      total_quantity,
      price,
      brand_desc,
      brand_image,
      quantity,
      colour,
      product_image,
      // brand_id,
    } = fieldValues;
    let temp: any = { ...errors };

    if ("password" in fieldValues) {
      if (password) {
        temp.password = "";
      } else {
        temp.password = "Password is required!";
      }
    }
    if ("email" in fieldValues) {
      if (email) {
        temp.email = "";
      } else {
        temp.email = "Email is required!";
      }
    }

    if ("brand_name" in fieldValues) {
      if (brand_name) {
        temp.brand_name = "";
      } else {
        temp.brand_name = "Brand Name is required";
      }
    }
    if ("total_quantity" in fieldValues) {
      if (total_quantity) {
        temp.total_quantity = "";
      } else {
        temp.total_quantity = "Quantity is required";
      }
    }
    if ("price" in fieldValues) {
      if (price) {
        temp.price = "";
      } else {
        temp.price = "Price is required";
      }
    }
    if ("brand_desc" in fieldValues) {
      if (brand_desc) {
        temp.brand_desc = "";
      } else {
        temp.brand_desc = "Description is requrired";
      }
    }
    if ("brand_image" in fieldValues) {
      if (brand_image.length <= 0) {
        temp.brand_image = "Image is required";
      } else {
        temp.brand_image = "";
      }
    }
    if ("quantity" in fieldValues) {
      if (quantity) {
        temp.quantity = "";
      } else {
        temp.quantity = "Quantity is required";
      }
    }

    if ("colour" in fieldValues) {
      if (colour) {
        temp.colour = "";
      } else {
        temp.colour = "Colour is required";
      }
    }
    if ("product_image" in fieldValues) {
      if (product_image.length <= 0) {
        temp.product_image = "Image is required";
      } else {
        temp.product_image = "";
      }
    }
    setErrors({ ...temp });

    if (fieldValues === states)
      return Object.values(temp).every((item) => item === "");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setStates({ ...states, [name]: value });

    validate({ [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    setStates({ ...states, [name]: files ? files[0] : [] });

    validate({ [name]: files });
    setTouched({ ...touched, [name]: true });
  };

  return {
    states,
    handleChange,
    setTouched,
    setErrors,
    setStates,
    handleImageChange,
    errors,
    touched,
    validate,
  };
};