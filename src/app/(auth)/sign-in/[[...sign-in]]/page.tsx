'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/ui/icons'
import { GraduationCap } from 'lucide-react'

export default function SignInPage() {
  return (
    <div className="grid w-full flex-grow items-center px-4 sm:justify-center">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="w-full flex-grow space-y-6 rounded-2xl bg-card/50 backdrop-blur-sm px-4 py-10 ring-1 ring-border sm:w-96 sm:px-8"
        >
          <header className="text-center items-center flex flex-col">
            <GraduationCap className="w-10 h-10" />
            <h1 className="mt-4 text-xl font-medium tracking-tight text-foreground">
              Welcome back!
            </h1>
          </header>

          <Clerk.GlobalError className="block text-sm text-destructive" />

          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="grid gap-y-4">
              <Clerk.Connection
                name="google"
                className="flex w-full items-center justify-center gap-x-3 rounded-md bg-secondary px-3.5 py-2 text-sm font-medium text-secondary-foreground shadow-sm outline-none hover:bg-secondary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 16"
                  className="w-4"
                  aria-hidden
                >
                  <path
                    fill="currentColor"
                    d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
                  />
                </svg>
                Login with Google
              </Clerk.Connection>

              <Clerk.Connection
                name="github"
                className="flex w-full items-center justify-center gap-x-3 rounded-md bg-secondary px-3.5 py-2 text-sm font-medium text-secondary-foreground shadow-sm outline-none hover:bg-secondary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4"
                  aria-hidden
                >
                  <path
                    fill="currentColor"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
                Login with GitHub
              </Clerk.Connection>

              <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                or
              </p>

              <Clerk.Field name="identifier" className="space-y-2">
                <Clerk.Label asChild>
                  <Label>Email address</Label>
                </Clerk.Label>
                <Clerk.Input type="email" required asChild>
                  <Input
                    placeholder="Enter your email address"
                  />
                </Clerk.Input>
                <Clerk.FieldError className="block text-sm text-destructive" />
              </Clerk.Field>
            </CardContent>

            <CardFooter>
              <div className="grid w-full gap-y-4">
                <SignIn.Action submit asChild>
                  <Button>
                    <Clerk.Loading>
                      {(isLoading) =>
                        isLoading ? (
                          <Icons.spinner className="size-4 animate-spin" />
                        ) : (
                          'Continue'
                        )
                      }
                    </Clerk.Loading>
                  </Button>
                </SignIn.Action>

                <p className="text-center text-sm text-muted-foreground">
                  Dont have an account?{' '}
                  <Clerk.Link
                    navigate="sign-up"
                    className="font-medium text-foreground decoration-muted-foreground/20 underline-offset-4 outline-none hover:underline focus-visible:underline"
                  >
                    Sign up
                  </Clerk.Link>
                </p>
              </div>
            </CardFooter>
          </Card>
        </SignIn.Step>

        {/* Choose Strategy Step */}
        <SignIn.Step name="choose-strategy">
          <Card className="w-full sm:w-96">
            <CardHeader>
              <CardTitle>Use another method</CardTitle>
              <CardDescription>
                Facing issues? You can use any of these methods to sign in.
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-y-4">
              <SignIn.SupportedStrategy name="email_code" asChild>
                <Button type="button" variant="link">
                  Email code
                </Button>
              </SignIn.SupportedStrategy>

              <SignIn.SupportedStrategy name="password" asChild>
                <Button type="button" variant="link">
                  Password
                </Button>
              </SignIn.SupportedStrategy>
            </CardContent>

            <CardFooter>
              <div className="grid w-full gap-y-4">
                <SignIn.Action navigate="previous" asChild>
                  <Button>
                    <Clerk.Loading>
                      {(isLoading) =>
                        isLoading ? (
                          <Icons.spinner className="size-4 animate-spin" />
                        ) : (
                          'Go back'
                        )
                      }
                    </Clerk.Loading>
                  </Button>
                </SignIn.Action>
              </div>
            </CardFooter>
          </Card>
        </SignIn.Step>

        <SignIn.Step name="verifications">
          <SignIn.Strategy name="password">
            <Card className="w-full sm:w-96">
              <CardHeader>
                <CardTitle>Enter your password</CardTitle>
                <CardDescription>
                  Please enter your account password
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  Welcome back <SignIn.SafeIdentifier />
                </p>
              </CardHeader>

              <CardContent className="grid gap-y-4">
                <Clerk.Field name="password" className="space-y-2">
                  <Clerk.Label asChild>
                    <Label>Password</Label>
                  </Clerk.Label>
                  <Clerk.Input type="password" asChild>
                    <Input />
                  </Clerk.Input>
                  <Clerk.FieldError className="block text-sm text-destructive" />
                </Clerk.Field>
              </CardContent>

              <CardFooter>
                <div className="grid w-full gap-y-4">
                  <SignIn.Action submit asChild>
                    <Button>
                      <Clerk.Loading>
                        {(isLoading) =>
                          isLoading ? (
                            <Icons.spinner className="size-4 animate-spin" />
                          ) : (
                            'Continue'
                          )
                        }
                      </Clerk.Loading>
                    </Button>
                  </SignIn.Action>

                  <SignIn.Action navigate="choose-strategy" asChild>
                    <Button type="button" size="sm" variant="link">
                      Use another method
                    </Button>
                  </SignIn.Action>
                </div>
              </CardFooter>
            </Card>
          </SignIn.Strategy>

          {/* Email Code Strategy */}
          <SignIn.Strategy name="email_code">
            <Card className="w-full sm:w-96">
              <CardHeader>
                <CardTitle>Check your email</CardTitle>
                <CardDescription>
                  Enter the verification code sent to your email
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  Welcome back <SignIn.SafeIdentifier />
                </p>
              </CardHeader>

              <CardContent className="grid gap-y-4">
                <Clerk.Field name="code">
                  <Clerk.Label className="sr-only">
                    Verification Code
                  </Clerk.Label>
                  <div className="grid gap-y-2 items-center justify-center">
                    <div className="flex justify-center text-center">
                      <Clerk.Input
                        type="otp"
                        autoSubmit
                        className="flex justify-center has-[:disabled]:opacity-50"
                        render={({ value, status }) => (
                          <div
                            data-status={status}
                            className="relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=selected]:ring-1 data-[status=selected]:ring-ring data-[status=cursor]:ring-1 data-[status=cursor]:ring-ring"
                          >
                            {value}
                          </div>
                        )}
                      />
                    </div>

                    <Clerk.FieldError className="block text-sm text-destructive text-center" />

                    <SignIn.Action
                      asChild
                      resend
                      className="text-muted-foreground"
                      fallback={({ resendableAfter }) => (
                        <Button variant="link" size="sm" disabled>
                          Didn&apos;t receive a code? Resend (
                          <span className="tabular-nums">
                            {resendableAfter}
                          </span>
                          )
                        </Button>
                      )}
                    >
                      <Button variant="link" size="sm">
                        Didn&apos;t receive a code? Resend
                      </Button>
                    </SignIn.Action>
                  </div>
                </Clerk.Field>
              </CardContent>

              <CardFooter>
                <div className="grid w-full gap-y-4">
                  <SignIn.Action submit asChild>
                    <Button>
                      <Clerk.Loading>
                        {(isLoading) =>
                          isLoading ? (
                            <Icons.spinner className="size-4 animate-spin" />
                          ) : (
                            'Continue'
                          )
                        }
                      </Clerk.Loading>
                    </Button>
                  </SignIn.Action>

                  <SignIn.Action navigate="choose-strategy" asChild>
                    <Button size="sm" variant="link">
                      Use another method
                    </Button>
                  </SignIn.Action>
                </div>
              </CardFooter>
            </Card>
          </SignIn.Strategy>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}
