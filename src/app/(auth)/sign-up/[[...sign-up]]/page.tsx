'use client'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import { GraduationCap } from 'lucide-react'

export default function SignUpPage() {
  return (
    <div className="grid w-full flex-grow items-center px-4 sm:justify-center">
      <SignUp.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignUp.Step
                name="start"
                className="w-full space-y-6 rounded-2xl bg-card/50 backdrop-blur-sm px-4 py-10 ring-1 ring-border sm:w-96 sm:px-8"
              >
                <header className="text-center flex items-center flex-col">
                  <GraduationCap className="w-10 h-10" />
                  <h1 className="mt-4 text-xl font-medium tracking-tight text-foreground">
                    Create an account
                  </h1>
                </header>
                <div className="flex flex-col gap-3">
                  <Clerk.Connection name="google" asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      disabled={isGlobalLoading}
                    >
                      <Clerk.Loading scope="provider:google">
                        {(isLoading) =>
                          isLoading ? (
                            <Icons.spinner className="size-4 animate-spin" />
                          ) : (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 16"
                                className="mr-2 w-4"
                                aria-hidden
                              >
                                <path
                                  fill="currentColor"
                                  d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
                                />
                              </svg>
                              Continue with Google
                            </>
                          )
                        }
                      </Clerk.Loading>
                    </Button>
                  </Clerk.Connection>

                  <Clerk.Connection name="github" asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      disabled={isGlobalLoading}
                    >
                      <Clerk.Loading scope="provider:github">
                        {(isLoading) =>
                          isLoading ? (
                            <Icons.spinner className="size-4 animate-spin" />
                          ) : (
                            <>
                              <Icons.gitHub className="mr-2 h-4 w-4" />
                              Continue with GitHub
                            </>
                          )
                        }
                      </Clerk.Loading>
                    </Button>
                  </Clerk.Connection>
                </div>
                <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                  or
                </p>
                <Clerk.GlobalError className="block text-sm text-destructive" />
                <div className="space-y-4">
                  <Clerk.Field name="emailAddress" className="space-y-2">
                    <Clerk.Label className="text-sm font-medium text-foreground">
                      Email address
                    </Clerk.Label>
                    <Clerk.Input
                      type="text"
                      required
                      placeholder="Enter your email address"
                      className="w-full rounded-md bg-background px-3.5 py-2 text-sm text-foreground outline-none ring-1 ring-inset ring-input hover:ring-ring focus:ring-2 focus:ring-ring data-[invalid]:ring-destructive"
                    />
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>
                  <Clerk.Field name="password" className="space-y-2">
                    <Clerk.Label className="text-sm font-medium text-foreground">
                      Password
                    </Clerk.Label>
                    <Clerk.Input
                      type="password"
                      required
                      placeholder="********"
                      className="w-full rounded-md bg-background px-3.5 py-2 text-sm text-foreground outline-none ring-1 ring-inset ring-input hover:ring-ring focus:ring-2 focus:ring-ring data-[invalid]:ring-destructive"
                    />
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>
                </div>
                <SignUp.Captcha className="empty:hidden" />
                <SignUp.Action
                  submit
                  className="w-full"
                  asChild
                >
                  <Button className="w-full">Sign Up</Button>
                </SignUp.Action>
                <p className="text-center text-sm text-muted-foreground">
                  Have an account?{' '}
                  <Clerk.Link
                    navigate="sign-in"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Sign in
                  </Clerk.Link>
                </p>
              </SignUp.Step>
              <SignUp.Step
                name="verifications"
                className="w-full space-y-6 rounded-2xl bg-card/50 backdrop-blur-sm px-4 py-10 ring-1 ring-border sm:w-96 sm:px-8"
              >
                <header className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40"
                    className="mx-auto size-10 text-foreground"
                  >
                    <mask
                      id="a"
                      width="40"
                      height="40"
                      x="0"
                      y="0"
                      maskUnits="userSpaceOnUse"
                    >
                      <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                    </mask>
                    <g fill="currentColor" mask="url(#a)">
                      <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
                      <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
                    </g>
                  </svg>
                  <h1 className="mt-4 text-xl font-medium tracking-tight text-foreground">
                    Verify email code
                  </h1>
                </header>
                <Clerk.GlobalError className="block text-sm text-destructive" />
                <SignUp.Strategy name="email_code">
                  <Clerk.Field name="code" className="space-y-2">
                    <Clerk.Label className="text-sm font-medium text-foreground">
                      Email code
                    </Clerk.Label>
                    <Clerk.Input
                      required
                      className="w-full rounded-md bg-background px-3.5 py-2 text-sm text-foreground outline-none ring-1 ring-inset ring-input hover:ring-ring focus:ring-2 focus:ring-ring data-[invalid]:ring-destructive"
                    />
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>
                  <SignUp.Action
                    submit
                    className="mt-4 w-full"
                    asChild
                  >
                    <Button className="w-full">Finish registration</Button>
                  </SignUp.Action>
                </SignUp.Strategy>
                <p className="text-center text-sm text-muted-foreground">
                  Have an account?{' '}
                  <Clerk.Link
                    navigate="sign-in"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Sign in
                  </Clerk.Link>
                </p>
              </SignUp.Step>
            </>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  )
}
