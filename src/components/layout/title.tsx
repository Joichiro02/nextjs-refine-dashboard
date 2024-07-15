'use client';

import { RefineLayoutThemedTitleProps, ThemedTitleV2 } from "@refinedev/antd";

export function Title(props: RefineLayoutThemedTitleProps) {
    return <ThemedTitleV2 {...props} text="Refine"/>
}