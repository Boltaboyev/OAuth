"use client"
import {useState} from "react"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {signIn} from "next-auth/react"

// icons
import {FcGoogle} from "react-icons/fc"
import {FiGithub} from "react-icons/fi"
import {SlSocialLinkedin} from "react-icons/sl"
import {TbBrandZoom} from "react-icons/tb"
import {SiMaildotru} from "react-icons/si"

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await signIn("credentials", {
            redirect: true,
            callbackUrl: "/dashboard",
            email,
            password,
        })

        if (res?.error) {
            console.error("Login failed", res.error)
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <span className="ml-auto cursor-pointer inline-block text-sm underline-offset-4 hover:underline">
                                        Forgot your password?
                                    </span>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full cursor-pointer">
                                Login
                            </Button>
                            <div className="flex justify-evenly items-center">
                                <Button
                                    onClick={() =>
                                        signIn("mailru", {
                                            redirect: true,
                                            callbackUrl: "/dashboard",
                                        })
                                    }
                                    variant="outline"
                                    size="icon"
                                    className="cursor-pointer">
                                    <SiMaildotru className="text-orange-500" />
                                </Button>

                                <Button
                                    onClick={() =>
                                        signIn("zoom", {
                                            redirect: true,
                                            callbackUrl: "/dashboard",
                                        })
                                    }
                                    variant="outline"
                                    size="icon"
                                    className="cursor-pointer">
                                    <TbBrandZoom className="text-blue-600" />
                                </Button>

                                <Button
                                    onClick={() =>
                                        signIn("google", {
                                            redirect: true,
                                            callbackUrl: "/dashboard",
                                        })
                                    }
                                    variant="outline"
                                    size="icon"
                                    className="cursor-pointer">
                                    <FcGoogle />
                                </Button>

                                <Button
                                    onClick={() =>
                                        signIn("github", {
                                            redirect: true,
                                            callbackUrl: "/dashboard",
                                        })
                                    }
                                    variant="outline"
                                    size="icon"
                                    className="cursor-pointer">
                                    <FiGithub />
                                </Button>

                                <Button
                                    onClick={() =>
                                        signIn("linkedin", {
                                            redirect: true,
                                            callbackUrl: "/dashboard",
                                        })
                                    }
                                    variant="outline"
                                    size="icon"
                                    className="cursor-pointer">
                                    <SlSocialLinkedin className="text-blue-800" />
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <span className="underline underline-offset-4 cursor-pointer">
                                Sign up
                            </span>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
