import { AsideAdmin, Navigation } from '../../../layouts';
import { router, useEffect, useState } from '../../../config/config';

import ProjectLayout from '../../../layouts/main-layout/admin/projects/ProjectLayout';
import { auth } from '../../../firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const ProjectPage = () => {
	const [userInfo, setUserInfo] = useState({});
	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			currentUser ? setUserInfo(currentUser) : router.navigate('/admin/login');
		});
	}, []);
	console.log(
		'🚀 ~ file: ProjectPage.js:10 ~ ProjectPage ~ userInfo',
		userInfo
	);
	return /* html */ `
    <div class="flex flex-col">
      ${Navigation()}
      <div class='mt-[120px] flex justify-between bg-white gap-x-6 px-4 my-4'>
        ${AsideAdmin()}
        ${ProjectLayout()}
      </div>
    </div>
  `;
};

export default ProjectPage;