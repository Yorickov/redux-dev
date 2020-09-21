class TasksController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :load_task, only: %i[show destroy]

  def index
    tasks = Task.all
    render json: tasks
  end

  def create
    task = Task.new(task_params)
    if task.save
      render json: task, status: :created
    else
      head :unprocessable_entity
    end
  end

  def show
    render json: @task
  end

  def destroy
    @task.destroy
  end

  private

  def task_params
    params.require(:task).permit(:text, :state)
  end

  def load_task
    @task = Task.find(params[:id])
  end
end
