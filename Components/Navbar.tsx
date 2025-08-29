// app/components/Navbar.tsx
import { CheckUser } from "@/lib/CheckUser";
import { SignOutButton } from "@clerk/nextjs";

const   Navbar = async() =>{
  const user = await CheckUser();
  console.log("user",user)
  return (
    <div>
      Navbar 
      <SignOutButton/>
    </div>
  );
}
export default Navbar
