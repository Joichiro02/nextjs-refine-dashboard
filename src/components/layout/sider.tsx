'use client';

import { RefineThemedLayoutV2SiderProps, ThemedSiderV2 } from "@refinedev/antd";

export function Sider(props: RefineThemedLayoutV2SiderProps) {
    return <ThemedSiderV2 {...props} fixed />
}