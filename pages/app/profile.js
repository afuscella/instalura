/* eslint-disable no-console */
import ProfileScreen from '../../src/components/screen/ProfileScreen';
import { websitePageHOC } from '../../src/components/wrapper/WebsitePage/hoc';
import { authService } from '../../src/services/auth/authService';

export default websitePageHOC(ProfileScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile',
    },
    menuProps: {
      display: false,
    },
  },
});

export async function getServerSideProps(ctx) {
  const auth = await authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();

  console.log('hasActiveSession', hasActiveSession);
  if (hasActiveSession) {
    const session = await auth.getSession();
    // const profilePage = await userService.getProfilePage(ctx);

    return {
      props: {
        user: {
          ...session,
          // ...profilePage.user,
        },
        // posts: profilePage.posts,
      },
    };
  }
  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {},
  };
}
