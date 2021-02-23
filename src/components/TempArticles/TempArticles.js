import React from 'react';
import { Layout } from '..';
import TempArticlesGrid from './Grid';
import { useGridActions, useGridButtons } from '../../hooks';

export default function TempArticles() {
    const rights = {
        create: [],
        export: [],
        import: [],
        read: ['Administrator', 'Researcher'],
    };
    const actions = useGridActions('tempArticles');
    const buttons = useGridButtons(actions, rights);

    return (
        <Layout my={4}>
            <TempArticlesGrid {...buttons} />
        </Layout>
    );
}
