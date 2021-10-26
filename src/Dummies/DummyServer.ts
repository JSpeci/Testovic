import { ResponseStatusEnum } from "../Abstract/Abstract";
import { MonitoringDtos } from "../Dtos/Monitoring";
import { MonLibs } from "./MonLibs.statit";
import { MonQs1, MonQs2 } from "./MonQuestions.static";

export class DummyServer {

    public async GetMonitoringLibraries(): Promise<MonitoringDtos.GridRowsResponse> {
        const obj: MonitoringDtos.GridRowsResponse = {
            data: MonLibs,
            responseStatus: ResponseStatusEnum.OK,
        }
        const p = Promise.resolve(obj)
        return p;
    }

    public async GetMonitoringQuestions(body: MonitoringDtos.QuestionGridRowsQuery): Promise<MonitoringDtos.QuestionGridRowsResponse> {

        switch (body.libraryID) {
            case ("123"): {

                const obj: MonitoringDtos.QuestionGridRowsResponse = {
                    data: MonQs1,
                    responseStatus: ResponseStatusEnum.OK,
                }
                const p = Promise.resolve(obj)
                return p;
            };
            case ("456"): {

                const obj: MonitoringDtos.QuestionGridRowsResponse = {
                    data: MonQs2,
                    responseStatus: ResponseStatusEnum.OK,
                }
                const p = Promise.resolve(obj)
                return p;
            };
            default: {
                const obj: MonitoringDtos.QuestionGridRowsResponse = {
                    data: [],
                    responseStatus: ResponseStatusEnum.OK,
                }
                const p = Promise.resolve(obj)
                return p;
            }

        }

    }


}