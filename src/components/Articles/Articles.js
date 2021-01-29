import React from 'react';
import { Layout } from '..';
import ArticlesGrid from './Grid';
import { useGridActions, useGridButtons } from '../../hooks';

export default function Articles() {
    const rights = {
        create: '*',
        export: '*',
        import: '*',
    };
    const actions = useGridActions('articles');
    const buttons = useGridButtons(actions, rights);

    return (
        <Layout my={4}>
            <ArticlesGrid {...buttons} />
        </Layout>
    );
}
