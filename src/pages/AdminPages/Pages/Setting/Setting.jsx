import Sidebar from "../../Components/Sidebar";
import joko from "../../../../assets/img/Admin/JOK.png"
import "../Pages.css";

export default function Setting() {
  return (
    <div className="bg-primary-black h-content w-screen">
      <div className="container mx-auto xl:px-20 lg:px-15">
        <Sidebar/>
        <div>
          <div className="menu-content bg-primary-grey text-white p-7 h-content">
            <div className="flex justify-between">
              <div>Account</div>
              <div>Edit</div>
            </div>
            <div className="px-8 flex flex-col">
                <div className="py-5 place-self-center">
                <img src={joko} className="rounded-full w-[100px]" alt="img-user"/>
                <input type="file" name="file" id="file" className="inputfile"/>
                <label for="file" className="text-xs flex justify-center pt-5 text-white/50 hover:text-white/25">Change photo</label>
                </div>
                <div className="place-self-center">
                  <form className="">
                    <div className="py-3">
                      <div className="text-xs pb-2">Full name</div>
                      <input type="input" className="bg-primary-black rounded-md xl:w-[500px] lg:w-[500px] md:w-[350px] p-2 text-sm"></input>
                    </div>
                    <div className="py-3">
                      <div className="text-xs pb-2">user name</div>
                      <input type="input" className="bg-primary-black rounded-md xl:w-[500px] lg:w-[500px] md:w-[350px] p-2 text-sm"></input>
                    </div>
                    <div className="py-3">
                      <div className="text-xs pb-2">Email</div>
                      <input type="email" className="bg-primary-black rounded-md xl:w-[500px] lg:w-[500px] md:w-[350px] p-2 text-sm"></input>
                    </div>
                    <div className="py-3">
                      <div className="text-xs pb-2">Password</div>
                      <input type="password" className="bg-primary-black rounded-md xl:w-[500px] lg:w-[500px] md:w-[350px] p-2 text-sm"></input>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
