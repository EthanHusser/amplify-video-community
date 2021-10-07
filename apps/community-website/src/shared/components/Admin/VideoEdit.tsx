import React, { useState, useEffect } from 'react'
import {
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput,
    ImageInput,
    ImageField,
    FormDataConsumer,
} from 'react-admin'

import ThumbnailField from './customFields/ThumbnailField'
import TagsInput from './customFields/TagsInput'
import { fetchSections } from '../../utilities'

const VideoEdit = (props) => {
    const [existingSections, setExistingSections] = useState([])

    useEffect(() => {
        ;(async () => {
            try {
                const { data } = await fetchSections()
                if (!data || !data.listSections || !data.listSections.items)
                    throw 'Received invalid sections list'
                const formatedSections = data.listSections.items.map(
                    (element) => ({ id: element.id, name: element.label })
                )
                setExistingSections(formatedSections)
            } catch (error) {
                console.error('Form/VideoUpload.tsx(fetchSections):', error)
            }
        })()
    }, [])

    return (
        <Edit {...props}>
            <SimpleForm>
                <ThumbnailField source="thumbnail" width={400} height={200} />
                <TextInput source="title" />
                <TextInput source="description" multiline={true} />
                <BooleanInput source="highlighted" />
                <TextInput source="author" />
                <TagsInput source="sections" choices={existingSections} />
                <FormDataConsumer>
                    {({ formData }) =>
                        formData.source === 'SELF' && (
                            <ImageInput
                                source="thumbnail"
                                label="Thumbnail"
                                accept="image/*"
                                multiple={false}
                            >
                                <ImageField
                                    source="thumbnailBlob"
                                    title="Thumbnail"
                                />
                            </ImageInput>
                        )
                    }
                </FormDataConsumer>
            </SimpleForm>
        </Edit>
    )
}

export default VideoEdit
