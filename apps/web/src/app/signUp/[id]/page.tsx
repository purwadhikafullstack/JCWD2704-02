import Image from 'next/image';
import FormNamePassComponent from '../_component/_formRegister.component'; // Adjust the path as per your file structure

export default function SignUp({ params }: any) {
  return (
    <>
      <div className="py-[30px]">
        <div className="md:hidden">
          <p className=" font-bold text-center text-[20px]">
            Create New Account
          </p>
          <div className="text-center text-[14px]">
            <p>Set up your email and password.</p>
            <p>You can always change it later.</p>
          </div>
        </div>
        <div className="p-4 md:p-0">
          <div className="grid-formRegister md:grid md:grid-cols-2 md:justify-between md:items-end">
            <div className="md:py-8">
              <Image
                src="/sign-up-form.svg"
                width={320}
                height={320}
                alt=""
                className="hidden md:block md:ml-[50px] lg:ml-[90px] lg:w-[420px] 2xl:w-[600px]"
              />
            </div>
            <div className="md:p-2 lg:mb-[50px] 2xl:mb-[110px]">
              <div className="text-title hidden md:block">
                <p className=" font-bold text-center text-[20px] lg:text-[40px]">
                  Create New Account
                </p>
                <div className="text-center text-[14px] lg:text-[20px]">
                  <p>Set up your email and password.</p>
                  <p>You can always change it later.</p>
                </div>
              </div>
              <FormNamePassComponent id={params.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
