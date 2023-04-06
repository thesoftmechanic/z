import os

def list_files(path="."):

    print("Files in", os.path.abspath(path), ":")

    for filename in os.listdir(path):

        print("\t", filename)

def create_file(path, content=""):

    with open(path, "w") as f:

        f.write(content)

def read_file(path):

    with open(path, "r") as f:

        content = f.read()

        print(content)

def delete_file(path):

    os.remove(path)

while True:

    print("\nOptions:")

    print("1. List files")

    print("2. Create file")

    print("3. Read file")

    print("4. Delete file")

    print("5. Quit")

    choice = input("Enter your choice: ")

    if choice == "1":

        list_files()

    elif choice == "2":

        filename = input("Enter filename: ")

        content = input("Enter content: ")

        create_file(filename, content)

    elif choice == "3":

        filename = input("Enter filename: ")

        read_file(filename)

    elif choice == "4":

        filename = input("Enter filename: ")

        delete_file(filename)

    elif choice == "5":

        break

    else:

        print("Invalid choice. Please try again.")
