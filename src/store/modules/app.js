import { otherRouter, appRouter } from '@/router/router';

const app = {
    state: {
        menuList: [],
        routers: [
            otherRouter,
            ...appRouter
        ]
    },
    mutations: {
        updateMenulist(state) {
            console.log("yazhi.tv");
            state.menuList = appRouter;
        }
    }
};

export default app;
