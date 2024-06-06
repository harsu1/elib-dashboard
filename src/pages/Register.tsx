import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/http/api";
import { LoaderCircle } from "lucide-react";

const RegisterPage = () => {

    const navigate = useNavigate();
    const nameRef=useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);
  
   const mutation = useMutation({
     mutationFn: register,
     onSuccess: ( ) => {
       // Invalidate and refetch
 
        navigate("/dashboard/home");
     },
   });
 
   const handleRegisterSubmit = () => {
    const name = nameRef?.current?.value;
     const email = emailRef?.current?.value;
     const password = passwordRef?.current?.value;
 
     if (!name||!email || !password) {
       return alert("Please enter email and password");
     }
 
     mutation.mutate({ name ,email, password });
     //mutation
     //make server call
   };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="grid gap-2">
                <Label htmlFor="first-name">  Name</Label>
                <Input ref={nameRef} id="first-name" placeholder="Max" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
               ref={emailRef}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input ref={passwordRef} id="password" type="password" />
            </div>
            <Button
              onClick={handleRegisterSubmit}
              className="w-full"
              disabled={mutation.isPending}
            >
              {mutation.isPending && <LoaderCircle className="animate-spin" />}

              <span className="ml-2">Create an account</span>
            </Button>

             <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link  to={'/auth/login'} className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
