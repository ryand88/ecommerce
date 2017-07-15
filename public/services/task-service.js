angular.module('taskApp').service('taskService', function () {

    this.tasks = [
        {
            taskStatus: "test status",
            description: "Test Description",
            location: "test location",
            assignee: "test asignee",
            creationDate: "creation date",
            dueDate: "due date",
            completionDate: "completion date",
            createdBy: "created by test",
            notes: [
                {
                    noteBy: "test note by 1",
                    noteDate: "test note date 1",
                    noteBody: "here's a note test"
                },
                {
                    noteBy: "test note by 2",
                    noteDate: "test note date 2",
                    noteBody: "here's another note test"
                }
            ],
            type: "test task type",
            completionNote: "test completion note"
        },
        {
            taskStatus: "test status",
            description: "Second Test Description",
            location: "test location",
            assignee: "test asignee",
            creationDate: "creation date",
            dueDate: "due date",
            completionDate: "completion date",
            createdBy: "created by test",
            notes: [
                {
                    noteBy: "test note by 1",
                    noteDate: "test note date 1",
                    noteBody: "here's a note test"
                },
                {
                    noteBy: "test note by 2",
                    noteDate: "test note date 2",
                    noteBody: "here's another note test"
                }
            ],
            type: "test task type",
            completionNote: "test completion note"
        }
    ]

})