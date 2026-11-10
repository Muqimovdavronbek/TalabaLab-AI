import Workspace from '@/components/workspace';
import {getChatGPTUser} from './chatgpt-auth';
export const dynamic='force-dynamic';
export default async function Page(){const user=await getChatGPTUser();return <Workspace initialUser={user?{displayName:user.displayName,email:user.email,fullName:user.fullName}:null}/>;}
