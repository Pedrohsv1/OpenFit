import { useState } from 'react';
import mockData from './mockData'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Layout from './layout';
import { ProviderId } from 'firebase/auth';
import Card from './Card';
import './kanban.css'

export const Board = () => {  

  const [data, setData] = useState(mockData)

  const onDragEnd = (result:any) => {
    if (!result.destination) return
    const { source, destination} = result
    if (source.droppableId !== destination.droppableId)
    {
      console.log("sua mae")
      const ColunmIndexSource = data.findIndex(e => e.id === source.droppableId)
      const ColunmIndexDestination = data.findIndex(e => e.id === destination.droppableId)

      const ColumnSource = data[ColunmIndexSource]
      const ColumnDestination= data[ColunmIndexDestination]

      const SourceTask = [...ColumnSource.tasks]
      const DestinationTaks = [...ColumnDestination.tasks]

      const [Removed] = SourceTask.splice(source.index, 1)
      DestinationTaks.splice(destination.index, 0, Removed)

      data[ColunmIndexSource].tasks = SourceTask
      data[ColunmIndexDestination].tasks = DestinationTaks

      setData(data)


    }
  }

  return (
    <>
      <Layout />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban">
          {
            data.map((section:any) => (
              <Droppable
              key={section.id}
              droppableId={section.id}
              >
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    className="kanbanSection"
                    ref={provided.innerRef}
                  >
                    <div style={{display: 'flex', gap: '2em'}}>
                    <div className="kanbanSectionTititle">
                      {section.title}
                    </div>
                    <p>{section.number}</p>
                    </div>

                    <div className="kanbanSectionContent">
                      {
                      section.tasks.map((task:any, index:any) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                          <div
                          
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot.isDragging ? "0.5" : "1"
                            }}
                          >
                            <Card>
                              <h4>{task.title}</h4>
                              <div style={{display: 'flex', gap: "2em"}}>
                              <div style={{display: 'flex', marginLeft: '10px'}}>
                                {
                                  task.envolvidos && task.envolvidos.map((envolvidos:any) => (
                                    <>
                                    <img src={envolvidos.foto} width={28} height={28} className="rounded" style={{marginLeft: '-10px'}}></img>
                                    </>
                                  ))
                                }
                              </div>
                            </div>
                              
                            </Card>

                          </div>
                          )}
                          
                        </Draggable>
                      ))
                      }
                      {provided.placeholder}
                    </div>
                  </div>

                )}
              </Droppable>
            ))
          }
        </div>
      </DragDropContext>
    </>
  )
}

export default Board;
