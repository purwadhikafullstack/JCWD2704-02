import Image from 'next/image';
import FormSignInComponent from './_component/_form.component';
export default function SignUp() {
  return (
    <>
      <div className="py-[30px]">
        <div className="md:hidden">
          <p className=" font-bold text-center text-[20px]">Welcome Back </p>
          <div className="text-center text-[14px]">
            <p>Log in to your account using email</p>
            <p>or social networks</p>
          </div>
        </div>
        <div className="p-4 md:p-0">
          <div className="grid-formRegister md:grid md:grid-cols-2 md:justify-between md:items-end">
            <div className="md:py-8">
              <Image
                src="/welcome-sign.svg"
                width={320}
                height={320}
                alt=""
                className="hidden md:block md:ml-[50px] lg:ml-[90px] lg:w-[420px] 2xl:w-[600px]"
              />
            </div>
            <div className="md:p-2 lg:mb-[50px] 2xl:mb-[110px]">
              <div className="text-title hidden md:block">
                <p className=" font-bold text-center text-[20px] lg:text-[40px]">
                  Welcome Back
                </p>
                <div className="text-center text-[14px] lg:text-[20px]">
                  <p>Log in to your account using email</p>
                  <p>or social networks</p>
                </div>
              </div>
              <FormSignInComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
