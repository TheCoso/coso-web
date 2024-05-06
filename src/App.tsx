import type { Component } from 'solid-js';

import { Card } from './components/cards';

const App: Component = () => {
    return (
        <main class="
                grid grid-cols-3 grid-rows-2 h-svh gap-4
        ">
            <div class="col-span-1">
                <Card
                    section="CHI SONO"
                    title="Sono una card, ma puoi chiamarmi<i> Bento</i>."
                    paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tempore quae dolores explicabo eum, nihil harum eligendi minus a cum, eius neque, fugiat exercitationem perspiciatis possimus velit architecto modi veniam."
                />
            </div>
            <div class="col-span-1">
                <Card
                    section="CHI SONO"
                    title="Sono una card, ma puoi chiamarmi<i> Bento</i>."
                    paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tempore quae dolores explicabo eum, nihil harum eligendi minus a cum, eius neque, fugiat exercitationem perspiciatis possimus velit architecto modi veniam."
                />
            </div>
            <div class="col-span-1">
                <Card
                    section="CHI SONO"
                    title="Sono una card, ma puoi chiamarmi<i> Bento</i>."
                    paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tempore quae dolores explicabo eum, nihil harum eligendi minus a cum, eius neque, fugiat exercitationem perspiciatis possimus velit architecto modi veniam."
                />
            </div>
                
        </main>
    );
};

export default App;
