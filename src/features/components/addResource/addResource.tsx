import { SyntheticEvent, useState } from 'react';
import Footer from '../../../infrastructure/components/footer/footer';
import { Header } from '../../../infrastructure/components/header/header';
import { useResources } from '../../../infrastructure/hooks/useResources';
import { ProtoResource } from '../../../infrastructure/services/types/resources.types';
import styles from './addResource.module.css';

export function AddResource() {
    const title = "Let's create some content!";
    const { handleAdd } = useResources();

    const formInitialState = {
        title: '',
        subject: undefined,
        grade: undefined,
        description: '',
        pages: '',
        format: '',
    };

    const [addResource, setAddResource] = useState(formInitialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setAddResource({ ...addResource, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const newResource: ProtoResource = {
            ...addResource,
            title: addResource.title,
        };
        handleAdd(newResource);
        setAddResource(formInitialState);
    };

    return (
        <>
            <Header></Header>
            <h2 className={styles.Createtitle}>{title}</h2>
            <section className={styles.section}>
                <form className={styles.addform} onSubmit={handleSubmit}>
                    {' '}
                    <input
                        className={styles.addResource__input}
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={addResource.title}
                        onInput={handleInput}
                        aria-label="title"
                        required
                    ></input>
                    <input
                        className={styles.addResource__input}
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={addResource.subject}
                        onInput={handleInput}
                        aria-label="subject"
                        required
                    ></input>{' '}
                    <input
                        className={styles.addResource__input}
                        type="text"
                        name="grade"
                        placeholder="Grade"
                        value={addResource.grade}
                        onInput={handleInput}
                        aria-label="grade"
                        required
                    ></input>{' '}
                    <input
                        className={styles.addResource__input}
                        type="text"
                        name="description"
                        placeholder="description"
                        value={addResource.description}
                        onInput={handleInput}
                        aria-label="description"
                        required
                    ></input>{' '}
                    <input
                        className={styles.addResource__input}
                        type="text"
                        name="pages"
                        placeholder="Pages"
                        value={addResource.pages}
                        onInput={handleInput}
                        aria-label="pages"
                        required
                    ></input>
                    <input
                        className={styles.addResource__input}
                        type="file"
                        name="file"
                        id="file"
                        accept="image/png, image/jpeg"
                        value={addResource.format}
                        onChange={handleInput}
                        aria-label="file"
                    ></input>
                    <button className={styles.addResourceButton} type="submit">
                        Create Resource
                    </button>
                </form>
            </section>
            <Footer></Footer>
        </>
    );
}
export default AddResource;
